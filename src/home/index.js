function Home(props) {
  const handleClick = () => {
    props.onButtonClick();
  }

  return (
    <div>
      <button onClick={handleClick}>Honey, I'm home!</button>
    </div>
  );
}

export default Home;