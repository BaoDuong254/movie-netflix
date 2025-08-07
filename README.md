# Movie App

Movie App is a modern web application that allows users to browse and discover movies. Built with the latest front-end technologies, it fetches movie data from an API and presents it in a responsive, user-friendly interface.

## Live Demo

Try the live version deployed on Vercel: [https://movie-netflix-ebon.vercel.app/](https://movie-netflix-ebon.vercel.app/)

## Technologies

- Vite
- ReactJS
- Tailwind CSS

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/BaoDuong254/movie-netflix.git
    ```

2. Change into the project directory:

    ```bash
    cd movie-netflix
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Configure environment variables:

    Copy the example environment file and update the values as needed:

    ```bash
    cp .env.example .env
    ```

    Open `.env` and fill in your API keys or other variables.

5. Run the development server:

    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The optimized production build will be output to the `dist` directory.

## Contributing

Contributions are welcome! If you'd like to improve the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeatureName`.
3. Make your changes and commit: `git commit -m "Add some feature"`.
4. Push to your branch: `git push origin feature/YourFeatureName`.
5. Open a pull request.

Thank you for your contributions!
