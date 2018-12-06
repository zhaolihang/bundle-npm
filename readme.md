#   bundle-npm 
    export npm as a bundled js file

##  Useage:
```
    #only exec in cli
    npm i -g bundle-npm
    cd your workspace
    args: input(must) file(must) format(must) name(must) mini(option)
    bundle-npm --input upng-js --file bundle.js --format umd --name UPNG --mini  # bundle a npm module 'upng-js'
    bundle-npm --input ./index.js --file bundle.js --format umd --name UPNG --mini  # bundle by entry file './index.js'
    ## so 'bundle-npm --input index.js' != 'bundle-npm --input ./index.js'
```

```js
    
```