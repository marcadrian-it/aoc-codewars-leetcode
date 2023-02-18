function extractIds(data) {
    let ids  = []
    if ('id' in data) ids.push(data.id);
    if ('items' in data) data.items.forEach(item => ids = ids.concat(extractIds(item)));
    return ids;
  }