const multer = require('multer')
const path = require('path')


try {
const storage = multer.diskStorage({
   destination:(req,file,cb)=>{
      cb(null,'/uploads')
   }, 
   filename:(req,file,cb)=>{
      cb(null,file.fieldname + '-'+ Date.now() + path.extname(file.originalname))
   }
})
const upload = multer({storage})

module.exports = upload    

} catch (err) {
   throw err
}




// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;
