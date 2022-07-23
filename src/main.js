let screen = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.innerText = screenValue;
        }
        else if (buttonText == '=') {
            try{
                screenValue = eval(screenValue);

            }
            catch(e)
            {
                alert("There was an error computing expression you just entered")
                screenValue="";
            }
            
            screen.innerText=screenValue;
        }
        else {
            screenValue += buttonText;
 
            screen.innerText = screenValue;
        }

    })
}
const html=document.querySelector('html');
const toggleTheme =document.querySelector('#toggle-theme');
const toggleThemeIcon = toggleTheme.querySelector('img');
toggleTheme.addEventListener('click',()=>{
    html.classList.toggle('dark');
    const isDark =html.classList.contains('dark')
    const themeIcon = isDark?'light':'dark'
    toggleThemeIcon.src=`./images/icon-${themeIcon}.svg`
})

