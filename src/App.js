import React, { Component } from 'react';
import { userDataEndpoint } from './constants/api_data.js';
import Crud from './components/Crud';

class App extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            initialData: [],
            filteredData: [],
            currentPage: 1
        }
    }

    // This helps the search to look for users using the ID instead of name
    // cuz ID is easier to write and test
    filterData = e => {
        const { initialData } = this.state;

        let filteredData = [...initialData]
        .map(data => data)
        .filter(data => data.id === Number(e.target.value));

        this.setState({
            filteredData: filteredData
        })
    }

    // Fetch data here to render when page loads
    componentDidMount(){
        this.getUsersData();
        this.getInitialData();
    }

    nextPage = () => {
        const { initialData, currentPage } = this.state;
        const maxPage = Math.round(initialData.length / 5);

        // This test if you dont have more users in the next page
        // If you dont, then its not necessary to go to the next page
        if(maxPage !== currentPage){
            this.setState({
                currentPage: currentPage + 1
            }, () => {
                this.getUsersData();
            })
        }
    }

    // Going to the previousPage and added a conditional cuz page 1 doesnt exist
    previousPage = () => {
        if(this.state.currentPage === 1){
            return;
        } else {
            this.setState({
                currentPage: this.state.currentPage - 1
            }, () => { 
                this.getUsersData();
            })
        }
    }

    // Get this initial data in order to had the filter working with all users
    getInitialData = () => {
        fetch(userDataEndpoint)
        .then( users => {
            return users.json();
        }).then( dataInitial => {
            this.setState({
                initialData: dataInitial,
            })
        }).catch( err => {
            console.log(" Initial data error ",err);
        })
    }

    // Fetching data to map the users, using limit=5 per page
    getUsersData = () => {
        fetch(`${userDataEndpoint}?_limit=5&_page=${this.state.currentPage}`)
        .then( users => {
            return users.json();
        }).then( jsonData => {
            this.setState({
                data: jsonData,

            })
        }).catch( err => {
            console.log("If it works don't touch it ",err);
        })
    }

    render (){
        const { data, filteredData } = this.state;
        const { filterData, nextPage, previousPage } = this;

        // Filtered data here
        if(filteredData.length){
            return (
                <div>
                    <Crud
                        data={filteredData}
                        filterData={filterData}
                        nextPage={nextPage}
                        previousPage={previousPage}
                    />
                </div>
            )
        }
        // Data not filtered here
        return (
            <div>
                <Crud 
                    data={data} 
                    filterData={filterData}
                    nextPage={nextPage}
                    previousPage={previousPage}
                />
            </div>
        )
    }
}

App.displayName = 'App';

export default App;