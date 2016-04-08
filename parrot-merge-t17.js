  (function(){
        var easterEgg_partyNoMore = localStorage.getItem('easterEgg_partyNoMore'),
            easterEgg_assetsCached = localStorage.getItem('easterEgg_assetsCached');

        //chance to pre-cache assets
        if(!easterEgg_assetsCached) {
            var shouldCache = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
            if(shouldCache == 20) {
                localStorage.setItem('easterEgg_assetsCached', true);
                var easterEgg_cachedAirhorn = new Audio("https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3");
                var easterEgg_cachedCheer = new Audio("https://www.myinstants.com/media/sounds/cheering.mp3");
                var easterEgg_cachedFireworks=new Image();
                easterEgg_cachedFireworks.src='https://media.giphy.com/media/araoLWtAIZKzS/giphy.gif';
                var easterEgg_cachedParrot=new Image();
                easterEgg_cachedParrot.src='https://media.giphy.com/media/10v0l8aVLyLJ5e/giphy.gif';
            }
        }

        //only play it once
        if(!false){
            var easterEgg_robinTier,
                easterEgg_airHorn = [],
                easterEgg_airHorn_interval = [],
                easterEgg_airHorn_timeOut = [
                    300,
                    800,
                    1200,
                    500
                ],
                easterEgg_cheer,
                easterEgg_cheer_interval,
                easterEgg_cheer_timeOut = 600,
                easterEgg_fireWorks_URL = 'https://media.giphy.com/media/araoLWtAIZKzS/giphy.gif',
                easterEgg_fireWorks = [],
                easterEgg_fireWorks_BUFFER = 100,
                easterEgg_windowHeight = $( window ).height(),
                easterEgg_windowWidth = $( window ).width();

       
            // uncomment to enable (requires clearing of local storage for multiple views)
            easterEgg_robinTier=17;

            //if we're tier 17
            if(easterEgg_robinTier == 17){
                //set local storage so it doesn't happen again
                localStorage.setItem('easterEgg_partyNoMore', true);

                //create cheer loop
                easterEgg_cheer = new Audio("https://www.myinstants.com/media/sounds/cheering.mp3");
                easterEgg_cheer_interval = setInterval(function(){
                    easterEgg_cheer.play();
                }, easterEgg_cheer_timeOut);

                //create fireworks
                for (var i = 0; i < 7; i++) {
                    var easterEgg_fireWorks_image = $('<img>');
                    easterEgg_fireWorks_image.attr('src', easterEgg_fireWorks_URL);
                    easterEgg_fireWorks_image.css('position', 'absolute');
                    easterEgg_fireWorks_image.css('zIndex', '99');
                    easterEgg_fireWorks_image.css('top', Math.random() * ((easterEgg_windowHeight-easterEgg_fireWorks_BUFFER) - easterEgg_fireWorks_BUFFER));
                    easterEgg_fireWorks_image.css('left', Math.random() * ((easterEgg_windowWidth-easterEgg_fireWorks_BUFFER) - easterEgg_fireWorks_BUFFER));
                    easterEgg_fireWorks.push(easterEgg_fireWorks_image);

                    $('body').append(easterEgg_fireWorks_image);
                }

                //create airhorn loops
                for (var i = 0; i < 4; i++) {
                    (function(){
                        var y = i;
                        easterEgg_airHorn[y] = new Audio("https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3");
                        easterEgg_airHorn_interval[y] = setInterval(function(){
                            (function(){
                                var x = y;
                                 easterEgg_airHorn[x].play();
                            })();
                        }, easterEgg_airHorn_timeOut[y]);
                    })();
                }
                //dancing parrot
                $('body').append('<div id="easterEgg_parrot" style="position:absolute; z-index:100; top:0; right:0; width:360px; height:203px"><img src="https://media.giphy.com/media/10v0l8aVLyLJ5e/giphy.gif"></div>');

                //"we did it" banner
                $('body').append('<div id="easterEgg_weDidItReddit" style="position:absolute; z-index:101; top:0; left:0; color:red; font-size: 100px;">WE DID IT REDDIT!!!111!</div>');

                //remove everything @30s
                setTimeout(function(){
                    $('#easterEgg_parrot').remove();
                    $('#easterEgg_weDidItReddit').remove();
                    clearTimeout(easterEgg_cheer_interval);
                    for (var i = 0; i < 4; i++) {
                        clearTimeout(easterEgg_airHorn_interval[i]);
                    }
                    for (var i = 0; i < easterEgg_fireWorks.length; i++) {
                        easterEgg_fireWorks[i].remove();
                    }
                }, 15000);
            }
        }
    })();
