// Source: https://www.creativejuiz.fr/blog/javascript/recuperer-parametres-get-url-javascript
function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

var video = document.getElementById('video');
var video_buttons_container = document.getElementById('video_buttons_container');
var video_unmute = document.getElementById('video_unmute');
var video_replay = document.getElementById('video_replay');
var language = 'en';
var browserLanguage = navigator.language.substr(0,2) || navigator.userLanguage.substr(0,2);
var video_height = '360';
var meta = document.getElementsByTagName('meta');
var og_title = '';
var og_image = '';

switch(browserLanguage) {
    case 'es':
        language = browserLanguage;
        break;
    case 'fr':
        language = browserLanguage;
        og_title = 'Boccard vous souhaite ses meilleurs vœux';
        og_image = 'share-fr.jpg';
        break;
    case 'pl':
        language = browserLanguage;
        break;
    case 'ru':
        language = browserLanguage;
        break;
    case 'zh':
        language = browserLanguage;
        break;
}

for (var i = 0; i < meta.length; i++) {
  if (meta[i].getAttribute('property') === 'og:title' && !!og_title) {
    meta[i].setAttribute('content', og_title);
  } else if (meta[i].getAttribute('property') === 'og:image' && !!og_image) {
    meta[i].setAttribute('content', og_image);
  }
}

if (window.innerWidth >= 1024) {
    video_height = '720';
}

filename = 'videos/Boccard-voeux2020_' + language.toUpperCase() + '_' + video_height + 'p';

var sourceOgg = document.createElement('source');
sourceOgg.setAttribute('type', 'video/ogg');
sourceOgg.setAttribute('src', filename + '.ogv');
video.appendChild(sourceOgg);

var sourceMp4 = document.createElement('source');
sourceMp4.setAttribute('type', 'video/mp4');
sourceMp4.setAttribute('src', filename + '.mp4');
video.appendChild(sourceMp4);

var sourceWebm = document.createElement('source');
sourceWebm.setAttribute('type', 'video/webm');
sourceWebm.setAttribute('src', filename + '.webm');
video.appendChild(sourceWebm);

if (!video.muted) {
    video_unmute.classList.remove('on');
}

video.onended = function() {
    video.classList.add('hidden');

    setTimeout(function() {
        video_buttons_container.classList.add('on');
        video_buttons_container.classList.remove('hidden');
    }, 600);
};

video_unmute.onclick = function () {
    video.muted = false;
    video_unmute.classList.add('hidden');

    setTimeout(function() {
        video_unmute.classList.remove('on');
    }, 250);
};

video_replay.onclick = function () {
    video.classList.remove('hidden');
    video_buttons_container.classList.add('hidden');

    setTimeout(function() {
        video_buttons_container.classList.remove('on');
    }, 250);

    video.currentTime = 0;
    video.play();
};
