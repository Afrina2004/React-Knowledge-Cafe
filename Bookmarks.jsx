import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className="md:w-1/3  bg-gray-300 ml-4 mt-2 pt-2 rounded-xl">
            <div className="p-4 border-b-2">
            <h3 className="text-4xl text-center p-4 text-green-800"> Reading Time : {readingTime}</h3>
         <h2 className="text-3xl text-center text-yellow-800">Bookmarks Blogs : {bookmarks.length}</h2>  
         </div>
        {
            bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
        }
        
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;