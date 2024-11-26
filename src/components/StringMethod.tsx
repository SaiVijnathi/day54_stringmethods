function StringMethod() {
  return (
    <div>
        
        <button type='button' onClick={()=>{
            console.clear();
            let name="Sai Vijnathi";
            let upper = name.toUpperCase();
            let lower = name.toLowerCase();
            console.log(`UpperCase - ${upper},`);
            console.log(`LowerCase - ${lower}`);
        }}>toUpperCase/toLowerCase</button>


        <button type='button' onClick={()=>{
            console.clear();
            let firstName="Sai";
            let lastName = " Vijnathi"
            let concat = firstName.concat(lastName);
            console.log(concat);
        }}>concat</button>


        <button type='button' onClick={()=>{
            console.clear();
            let quote="    All is Well    ";
            let result = quote.trim();
            console.log(`--->${result}<---`);
            let result1 = quote.trimStart();
            console.log(`--->${result1}<---`);
            let result2 = quote.trimEnd();
            console.log(`--->${result2}<---`);
        }}>trim,trimStart,trimEnd</button>


        <button type='button' onClick={()=>{
            console.clear();
            let quote="5";
            let result = quote.padStart(4,"O");
            console.log(result);
            let result1 = quote.padEnd(6,"0");
            console.log(result1);
        }}>padStart,padEnd</button>


        <button type='button' onClick={()=>{
            console.clear();
            let quote="All is Well";
            let trim = quote.repeat(3);
            console.log(trim);
        }}>repeat</button>


        <button type='button' onClick={()=>{
            console.clear();
            let quote="dream big, work big.";
            console.log(quote);
            let result = quote.replace("big","high");
            let result1 = quote.replaceAll("big","high");
            console.log(result);
            console.log(result1);
        }}>replace/replaceAll</button>


        <button type='button' onClick={()=>{
            console.clear();
            let text="Hello";
            let split = text.split("");
            console.log(split);
        }}>split</button>


        <button type='button' onClick={()=>{
            console.clear();
            let text="Every step forward brings you closer to success.";
            let result = text.slice(11);
            let result1 = text.substring(11,25);
            console.log(result,result1);
        }}>slice/substring</button>


        <button type='button' onClick={()=>{
            console.clear();
            let text="Hello everyone this is me.";
            let result = text.length;
            console.log(result);
        }}>length</button>


        <button type='button' onClick={()=>{
            console.clear();
            let text="ప్రతీ అడుగు ముందుకే విజయానికి దగ్గర చేస్తుంది.";
            let result = text.charCodeAt(7);
            console.log(result);
        }}>charCodeAt</button>


        <button type='button' onClick={()=>{
            console.clear();
            let chars = String.fromCharCode(72, 101, 108, 108, 111);
            console.log(chars);
        }}>fromCharCode</button>


        <button type='button' onClick={()=>{
            console.clear();
            let text="Hello everyone this is me.";
            let result = text.endsWith("me.");
            console.log(result);
            let result1 = text.startsWith("Hello");
            console.log(result1);
        }}>endsWith/startsWith</button>


        <button type='button' onClick={()=>{
            console.clear();
            let text="All is Well";
            let result = text.includes("is");
            console.log(result);
        }}>includes</button>


    </div>
  )
}

export default StringMethod;