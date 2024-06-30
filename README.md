

# Music Data Fetcher

A simple React application that fetches music data from a local JSON server using Redux and Redux Saga.

## Features

- Displays a list of singers and their songs fetched from a JSON server.
- Handles loading and error states using Redux.

## Technologies Used

- React
- Redux
- Redux Saga
- JSON Server
- Vite
- TailwindCSS
- Axios

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the JSON server and React application concurrently: `npm run dev`.

### Prerequisites

- Node.js (v14 or higher)

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/YonasAdane/fetch-Singers.git
   ```
2. Navigate to the project directory:
   ```sh
   cd fetch-Singers
   ```
3. Install NPM packages:
   ```sh
   npm install
   ```

### Running the Application

To start the JSON server and the React development server concurrently, run:

```sh
npm run dev
```

This will start the JSON server using the `MusicList.json` file and the Vite development server.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the JSON server and Vite development server concurrently.
- `npm run develop`: Runs the Vite development server.
- `npm run json`: Starts the JSON server.

