(function(){
Template.body.addContent((function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("navbar"));
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.Raw('<div class="row">\n        <div class="small-12 medium-4 large-6 columns namelogo">\n          <h1>Omari.io</h1>\n        </div>\n        <div class="small-12 medium-8 large-6 columns">\n          <div class="nav-bar">\n            <ul class="button-group">\n            <li><a href="#" class="button">About</a></li>\n            <li><a href="#" class="button">Work</a></li>\n            <li><a href="#" class="button">Contact</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <div class="hero">\n        <video loop="loop" id="intro-video" class="video" autoplay="">\n          <!-- <source src="//a0.muscache.com/airbnb/static/Croatia-P1-1.mp4" type="video/mp4"> -->\n          <source src="http://d3nfne19r71c9c.cloudfront.net/v/133/1326702_a-01.webm" type="video/webm">\n        </video>\n        <div class="row">\n          <div class="large-12 columns intro-text">\n            <p>Hi there!<br>I take outdoor pictures.</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="row about">\n        <div class="medium-6 large-8 columns">\n          <h4>About</h4>\n          <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit culpa. Boudin aliqua adipisicing rump corned beef.</p>\n        </div>\n        <div class="medium-6 large-4 columns">\n          <img src="http://placehold.it/550x300">\n        </div>\n      </div>\n\n      <div class="row work">\n        <hr>\n        <div class="large-12 columns">\n          <h4>Work</h4>\n          <p>Click on each image to view my work!</p>\n\n          <ul class="clearing-thumbs small-block-grid-1 medium-block-grid-2 large-block-grid-4" data-clearing="">\n            <li>\n              <a href="img/1-chad.jpg"><img data-caption="Web client" src="img/1-chad.jpg"></a>\n            </li>\n            <li>\n              <a href="img/2-mapit.jpg"><img data-caption="iOS / Web App" src="img/2-mapit.jpg"></a>\n            </li>\n            <li>\n              <a href="img/3-erika.jpg"><img data-caption="Website client" src="img/3-erika.jpg"></a>\n            </li>\n            <li>\n              <a href="img/4-bus.jpg"><img data-caption="Web client" src="img/4-bus.jpg"></a>\n            </li>\n          </ul>\n        </div>\n      </div>');
}));

})();
