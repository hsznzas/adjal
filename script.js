{\rtf1\ansi\ansicpg1252\cocoartf2757
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c100000\c100000\c100000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww14940\viewh17080\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs32 \cf0 \expnd0\expndtw0\kerning0
document.addEventListener('DOMContentLoaded', () => \{\
    const movingElements = document.querySelector('.moving-elements');\
    const numElements = 20;\
\
    for (let i = 0; i < numElements; i++) \{\
        const element = document.createElement('div');\
        element.classList.add('element');\
        \
        const size = Math.random() * 100 + 50;\
        element.style.width = `$\{size\}px`;\
        element.style.height = `$\{size\}px`;\
        \
        element.style.left = `$\{Math.random() * 100\}vw`;\
        element.style.top = `$\{Math.random() * 100\}vh`;\
        \
        const duration = Math.random() * 20 + 10;\
        const delay = Math.random() * 5;\
        \
        element.style.animation = `float $\{duration\}s $\{delay\}s infinite linear`;\
        \
        movingElements.appendChild(element);\
    \}\
\});\
\
// Add this to your CSS file\
@keyframes float \{\
    0% \{\
        transform: translate(0, 0);\
    \}\
    25% \{\
        transform: translate(10%, 10%);\
    \}\
    50% \{\
        transform: translate(0, 20%);\
    \}\
    75% \{\
        transform: translate(-10%, 10%);\
    \}\
    100% \{\
        transform: translate(0, 0);\
    \}\
\}}