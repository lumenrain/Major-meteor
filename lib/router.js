Router.configure({
    layoutTemplate: 'layout'
});


Router.route('/', function () {
        this.render('home');
    },
    {
        name: 'home'
    });

Router.route('/albums', function () {
        this.render('albums');
    },
    {
        name: 'albums'
    });

Router.route('/add_albums', function () {
          this.render('add_albums');
    },
    {
          name:'add_albums'
    });
Router.route('/show_album/:_id', {
          name: 'show_album',
          template: 'show_album',
          data: function() {
            return Albums.findOne(this.params._id);
    }
});
