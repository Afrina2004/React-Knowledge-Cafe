import './App.css'
import { useState } from "react"
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
 const [bookmarks,setBookmarks] = useState([]); 
const [readingTime,setReadingTime] = useState(0)


 const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks,blog];
  setBookmarks(newBookmarks);
 }

const  handleMarkAsRead = (id,time) => {
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
  //console.log('remove bookmark',id);
  const remainingBookmarks = bookmarks.filter(bookmark =>bookmark.id !== id);
  setBookmarks(remainingBookmarks);
}

  return (
    <>
     <Header></Header>
     <div className="md:flex max-w-7xl mx-auto">
     <Blogs  handleMarkAsRead={ handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks> 
     
     </div>
    </>
  )
}

export default App
