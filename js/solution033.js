function meeting(s) {
  const namesArr = s.split(';').reduce((obj, element) => {
    const [firstName, lastName] = element.split(':');
    obj.push({
      first_name: firstName.toUpperCase(),
      last_name: lastName.toUpperCase(),
    });
    return obj;
  }, []);

  namesArr.sort((a, b) => {
    if (a.last_name < b.last_name) {
      return -1;
    }
    if (a.last_name > b.last_name) {
      return 1;
    }

    if (a.first_name < b.first_name) {
      return -1;
    }
    if (a.first_name > b.first_name) {
      return 1;
    }
    return 0;
  });

  const formattedArr = namesArr.map(
    (obj) => `(${obj.last_name}, ${obj.first_name})`
  );
  return formattedArr.join('');
}
