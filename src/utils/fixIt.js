export default function fixIt(ArrayOfObjs) {
   try {
        ArrayOfObjs.sort((a, b) => a.Number - b.Number);
        ArrayOfObjs = ArrayOfObjs.map(obj => {
            const {Number: _Number, imgUrl, title, projectLink, codeLink, tags, ...others} = obj;
            return { _Number,imgUrl,title,projectLink,codeLink, tags }
        })
       return ArrayOfObjs
   }
   catch(e) {
       console.log('I messed up something in fixIt function: ', e.message)
       return [];
   }
}