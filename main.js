Game.registerMod('traditional chinese mod',{
    init: function() {        
        var css = document.createElement('style');
		css.innerHTML = `
            .titleFont,.title,.section,.lockedTitle,.smallFancyButton
            {
                font-family: 'Merriweather', Georgia, 'Microsoft JhengHei', serif;
            }

            #tooltip .data {
                font-size: 100%;
                line-height: 14px;
            }
		`;
		document.head.appendChild(css);
    },
});
