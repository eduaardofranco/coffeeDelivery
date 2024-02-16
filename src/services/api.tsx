// Arquivo: api.js

export const fetchCoffees = () => {
    const fileCoffees = '/coffees.json';
  
    return fetch(fileCoffees)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching coffees');
        }
        return response.json();
      });
  };
  