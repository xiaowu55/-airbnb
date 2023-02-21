const  theme = {
    color:{primaryColor:'#ff385c',
    secondaryColor:'#00848a',
    textColor:'#484848'
},
mixin:{
    boxShadow:`
    transition:box-shadow 200ms ease;
    &:hover{
        box-shadow: 0 1px rgba(0,0,0,.18);
    }
    `
}

    
}

export default theme