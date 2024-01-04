import React, { useState, useEffect } from 'react';
import NavBar from './containers/NavBar/NavBar';
import Main from './containers/Main/Main';
import { Beer } from './types/types';
import BeerInfo from './components/BeerInfo/BeerInfo';
import "./App.scss";


const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);
  const [abvFilter, setAbvFilter] = useState<boolean>(false);
  const [brewedBeforeFilter, setBrewedBeforeFilter] = useState<boolean>(false);
  const [phFilter, setPhFilter] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [beersPerPage] = useState<number>(50); 
  const [selectedBeer, setSelectedBeer] = useState<Beer |null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filterId: string, checked: boolean) => {
    if (filterId === 'abv') {
      setAbvFilter(checked);
    } else if (filterId === 'brewedBefore') {
      setBrewedBeforeFilter(checked);
    } else if (filterId === 'ph') {
      setPhFilter(checked);
    }
  };

  const handleBeerClick = (beer: Beer) => {
    setSelectedBeer(beer)
  }

  const handleCloseDetails = () => {
    setSelectedBeer(null)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=24`;
    
        const filters: string[] = [];
    
        if (abvFilter) {
          filters.push('abv_gt=6');
        }
    
        if (brewedBeforeFilter) {
          filters.push('brewed_before=01-2010');
        }
    
        if (phFilter) {
          // no direct endpoint for pH, filter in-memory
        }
    
        if (filters.length > 0) {
          url += `&${filters.join('&')}`;
        }
    
        const response = await fetch(url);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data: Beer[] = await response.json();
    
        // Apply search filter
        let filtered = data.filter((beer) =>
          beer.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        if (phFilter) {
          filtered = filtered.filter((beer) => beer.ph < 4);
        }
    
        setFilteredBeers(filtered);
      } catch (error) {
        console.error('Error fetching or filtering data:', error);
      }
    };
  
    fetchData();
  }, [abvFilter, searchTerm, brewedBeforeFilter, phFilter, currentPage, beersPerPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  
    return (
      <div className="app">
        <aside className="sidebar">
          <NavBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onFilterChange={handleFilterChange}
          />
        </aside>
        <div className="main">
          <Main beers={filteredBeers} onBeerClick={handleBeerClick} />
          {selectedBeer && (
            <BeerInfo beer={selectedBeer} onClose={handleCloseDetails} />
          )}
          </div>
          <div className="pagination-controls">
              <button className="pagination-controls__buttons" onClick={handlePrevPage} disabled={currentPage === 1}>
                Previous Page
              </button>
              <span className="pagination-controls__span">Page {currentPage}</span>
                <button className="pagination-controls__buttons" onClick={handleNextPage} disabled={filteredBeers.length === 0}>
                  Next Page
                </button>
          </div>
      </div>
    );
  };
  
  export default App;

