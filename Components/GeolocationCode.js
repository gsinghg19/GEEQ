const UserAccount = () => {
    const [location, setLocation] = useState(null);
  
    const [errorMsg, setErrorMsg] = useState(null);
    const [user, setUser] = useState({
      email: auth.currentUser.email,
      name: auth.currentUser.displayName,
      phoneNumber: auth.currentUser.phoneNumber,
      avatar: auth.currentUser.photoURL,
      transport: "car", //would have to get transport method from database here
      coords: { lat: 0, lng: 0 },
    });
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Location permissions not granted");
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        if (location) {
          setUser((prevUser) => {
            return {
              ...prevUser,
              coords: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
              },
            };
          });
        }
      })();
    }, []);
  
    return (
      <View style={styles.container}>
        <Text>My last known position:</Text>
        <Text>
          {errorMsg
            ? errorMsg
            : `latitude ${user.coords.lat} : longitude ${user.coords.lng}`}
        </Text>
        <Text style={styles.heading}>Email</Text>
        <TextInput
          value={user.email}
          style={styles.input}
          onChangeText={(text) => {
            setUser((prevUser) => {
              return { ...prevUser, email: text };
            });
          }}
        />