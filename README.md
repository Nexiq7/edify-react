# Edify - Edits Collection Platform

Edify is a modern web application that allows users to discover, create, and share collections of edits. Users can organize their favorite edits into themed boards, discover content from other creators, and build a personalized library of edit collections. Currently, only YouTube is supported as a video source.

![Example Board](src/assets/board.png)

## Features

### User Management
- **User Authentication**: Secure login and authentication system
- **User Profiles**: Personalized profiles with username and profile picture
- **Profile Management**: View and manage your created boards

### Board Management
- **Create Boards**: Create custom boards with titles and optional thumbnail images
- **Add Edits**: Add YouTube edits to your boards by URL
- **Delete Boards**: Remove boards you've created
- **Board Details**: View board details including title, creator, and edit count

### Edit Management
- **YouTube Integration**: Add edits directly from YouTube via URL (currently only YouTube is supported)
- **Edit Preview**: Hover over edits to preview content
- **Edit Organization**: Organize edits into themed collections

### Social Features
- **Discover**: Browse boards created by other users
- **Like Boards**: Save your favorite boards from other creators
- **Liked Boards Collection**: View all boards you've liked in one place

### UI/UX
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices
- **Modern Interface**: Clean, intuitive UI built with TailwindCSS
- **Interactive Elements**: Hover effects, modals, and smooth transitions

## Technologies Used

- **Frontend**:
  - React 19
  - TypeScript
  - TailwindCSS
  - React Router
  - React Icons
  - Vite (build tool)

- **Backend Integration**:
  - RESTful API integration
  - Fetch API for data retrieval and manipulation
  - Authentication with credentials

- **Media Storage**:
  - Cloudinary for image uploads and storage

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/edify-react.git
   cd edify-react
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_BACKEND_URL=your_backend_url
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

## Usage

1. **Sign Up/Login**: Create an account or log in to access all features
2. **Discover Boards**: Browse the discover page to find boards created by other users
3. **Create a Board**: From your profile, click the "+" button to create a new board
4. **Add Edits**: Open a board and click the "+" button to add YouTube edits (currently only YouTube is supported)
5. **Like Boards**: Click the heart icon on a board to save it to your liked boards
6. **View Liked Boards**: Navigate to the "Liked Boards" page to see all boards you've liked

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Cloudinary](https://cloudinary.com/)
