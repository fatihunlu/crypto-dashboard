# Crypto Dashboard

## Overview
The Crypto Dashboard is a web application built with Vue.js that displays real-time cryptocurrency data using the CoinGecko API. The data is presented in a dynamic grid powered by ag-Grid, allowing users to sort, filter, and paginate through the information. The application also leverages Pinia for state management, handling the fetching and sorting of data efficiently.

## Features

* Dynamic Grid Display: Uses ag-Grid to display cryptocurrency data with sortable and paginated columns.
* Real-Time Data: Fetches up-to-date cryptocurrency data from the CoinGecko API.
* Custom Cell Rendering: Implements custom cell renderers for enhanced data presentation.
* State Management: Utilizes Pinia to manage and update the state, including sorting and fetching data based on user interactions.
* Trending Data: Displays trending coins, NFTs, and categories, giving users insights into popular market movements.

## Tech Stack

* CoinGecko API: Provides real-time cryptocurrency data.
* ag-Grid: A powerful data grid component for displaying and manipulating large datasets.
* Pinia: A state management library for Vue.js applications.

<table>
 <tr>
    <td>
        <a href="https://www.coingecko.com/">
            <img width="60%" src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png" />
        </a>
    </td>
    <td>
        <a href="https://www.ag-grid.com/">
            <picture>
                <source media="(prefers-color-scheme: dark)" srcset="https://github.com/ag-grid/ag-grid/blob/latest/documentation/ag-grid-docs/public/images/ag-logos/svg-logos/AG-Grid-Logo_Dark-Theme.svg?raw=true"/>
                <source media="(prefers-color-scheme: light)" srcset="https://github.com/ag-grid/ag-grid/blob/latest/documentation/ag-grid-docs/public/images/ag-logos/svg-logos/AG-Grid-Logo_Light-Theme.svg?raw=true"/>
                <img width="60%" alt="AG Grid Logo" src="https://github.com/ag-grid/ag-grid/blob/latest/documentation/ag-grid-docs/public/images/ag-logos/svg-logos/AG-Grid-Logo_Light-Theme.svg?raw=true"/>
            </picture>
        </a>
    </td>
 </tr>
</table>

## How to Run

1. Clone the repository.
2. Install dependencies using `yarn`
3. Run the app with `yarn dev`
4. Open your browser and navigate to `http://localhost:5173`

## Rate Limit Warning

Please note that the CoinGecko API has rate limits, allowing a maximum of 50 API calls per minute. If you exceed this limit, you'll encounter a `429 Too Many Requests` error. The app includes basic state management to minimize unnecessary API calls, but during periods of high usage, you may still experience this error.

## License

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
