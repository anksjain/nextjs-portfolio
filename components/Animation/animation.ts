export const fadeInUp={
    initial:{
        opacity:0,
        y:100,
    },
    animate:{
        transition:{
            delay:0.5,
        },
        opacity:1,
        y:0,
    }
}
export const fadeInDown={
    initial:{
        opacity:0,
        y:-100,
    },
    animate:{
        transition:{
            type: "spring",
             bounce: 0.5
        },
        opacity:1,
        y:0,
    }
}
export const fadeInright={
    initial:{
        opacity:0,
        x:100,
    },
    animate:{
        transition:{
            delay:0.5,
        },
        opacity:1,
        x:0,
    }
}
export const fadeInleft={
    initial:{
        opacity:0,
        x:-100,
    },
    animate:{
        transition:{
            delay:0.5,
        },
        opacity:1,
        x:0,
    }
}
export const stagger={
    initial:{

    },
    animate:{
        transition:{
            delay:0.5,
            staggerChildren:0.1,
        },
    }
}
export const routeAnimation={
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
        },
    }
}