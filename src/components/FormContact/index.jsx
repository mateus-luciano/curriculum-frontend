export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [saved, setSaved] = useState(false);
  const [invalidData, setInvalidData] = useState(false);

  async function onSave(event) {
    event.preventDefault();

    setInvalidData(false);
    setSaved(false);

    if (!name || !email || phone || message) {
      setInvalidData(true);
    } else {
      await axios({
        method: 'post',
        url: `https://backend-curriculum-mateus.herokuapp.com/contact`,
        data: {
          name: name,
          email: email,
          phone: phone,
          message: message
        }
      }).then(response => {
        console.log(response.data.data)
      })
      .catch(error => console.log(error))
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSaved(true);
    }
  }

  return(
      
  );
}