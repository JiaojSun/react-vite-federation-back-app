function SubmitDataDemo() {
  const handleUpdate = () => {
    const requestBody = {
      name: 'foo4',
      version: 'bar'
    };

    fetch('/api/service/update', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <button onClick={handleUpdate} style={{ cursor: 'pointer' }}>
        提交数据
      </button>
    </div>
  );
}

export default SubmitDataDemo;
