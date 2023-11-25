# Fresh Store

Fresh Store is a simple online fresh bakery store built with React. It provides a user-friendly interface for browsing bakery items, adding them to the cart, and placing orders. The project is developed using Vite as the build tool and incorporates React Router for seamless navigation with data loading capabilities. The application simulates data fetching using a fake REST API built with JSON Server.

## Getting Started

To run the Fresh Store locally, follow these steps:

1\. **Clone the repository:**

```bash

git clone https://github.com/your-username/fresh-store.git

```

2\. **Install dependencies:**

```bash

cd fresh-store

npm install

```

3\. **Start the local JSON Server:**

```bash

npm start

```

This command initializes the fake REST API using JSON Server.

4\. **Start the development server:**

```bash

npm run dev

```

This command launches the application on your local machine.

5\. **Access the application:**

Open your browser and navigate to `http://localhost:3000` to access Fresh Store.

## Technologies Used

- **React**: Building the user interface.

- **Vite**: Fast and efficient build tool.

- **React Router**: Managing navigation with data loading.

- **JSON Server**: Simulating data fetching with a fake REST API.

- **Tailwind CSS**: Styling for a mobile-friendly and responsive design.

- **Redux Toolkit**: State management for global UI state.

- **Redux createAsyncThunk**: Handling geolocation fetching functionality.

## Features

- **User Registration**: Users can provide their name on the home page to interact with the app.

- **Shopping Cart**: Users can add items to the cart and manipulate cart items.

- **Order Management**: Orders are assigned a unique ID and can be searched using this ID.

- **Priority Setting**: Users can assign priority to orders, even after they are placed.

- **No User Data Storage**: The application does not store user data, ensuring privacy.

## Usage

1\. **Home Page:**

Users are required to provide their name on the home page to start using the app.

2\. **Shopping Cart:**

Users can add bakery items to the cart and manipulate the contents of the cart.

3\. **Placing Orders:**

Orders are given a unique ID and can be searched using this ID.

4\. **Priority Setting:**

Users can assign priority to orders, even after they have been placed.

## Contributing

Contributions are welcome! If you have ideas for improvements or find any issues, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
