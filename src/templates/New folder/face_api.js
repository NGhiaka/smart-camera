const API = (image_base64) => {
  // POST request using fetch with set headers
  console.log(image_base64)
  componentDidMount() {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer my-token',
            // 'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify({ image: image_base64 })
    };
    fetch('http://api-ai.bezel.vn/faces', requestOptions)
        .then(response => response.json())
        .then(res => this.setState({  faces: res.data }));
  }

}

export default API