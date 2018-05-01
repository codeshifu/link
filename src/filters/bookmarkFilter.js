export default (bookmarks, query) => {
  return Object.keys(bookmarks).filter(id => {
    const regex = new RegExp(query, 'i')
    return bookmarks[id].title.match(regex)
  })
}
