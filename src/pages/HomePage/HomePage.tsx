import MyButton from '../../components/UI/MyButton';

function HomePage() {
  return (
    <div className="flex h-screen bg-gray-100 justify-center items-center">
      <div>
        <h1 className="text-xl font-bold text-blue-500">
          Welcome to Home Page
        </h1>
        <MyButton />
      </div>
    </div>
  );
}

export default HomePage;
