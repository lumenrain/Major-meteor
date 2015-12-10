Template.albums.helpers({
  'showAlbums': function(){
    return Albums.find();
  },
  'images': function(){
    return AlbumsImages.findOne({_id:this.image});
  }
});

Template.albums.events({
    "click [data-action='addLikes']":function(event){
        event.preventDefault();
        currentAlbum = Albums.findOne(this._id);
         Albums.update({ _id:this._id}, {$inc:{likes: +1}  });
    }
})
