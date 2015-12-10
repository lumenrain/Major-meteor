Albums = new Mongo.Collection('albums');

AlbumsImages = new FS.Collection("albumsImages", {
  stores: [new FS.Store.GridFS("albumsImages")]
});

AlbumsImages.allow({
  insert: function(userId, doc){
    return true;
  },
  update: function(userId, doc, fieldNames, modifier){
    return true;
  },
  remove: function(userId){
    return true;
  },
  fetch: null
});

Albums.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Album name",
    max: 100
  },

  artist: {
    type: String,
    label: "Artist name",
    max: 50
  },

  songs: {
    type: [Object],
    minCount: 1
  },

  "songs.$.name": {
    type: String
  },

  description: {
    type: String,
    label: "Album description",
    max: 100
  },

  runtime: {
    type: Number,
    label: "Rumtime (Minutes)"
  },

  likes: {
    type: Number,
    optional:true
  },

  image: {
    type: String,

    autoform: {
      afFieldInput: {
        type: "cfs-file",
        collection: 'albumsImages',
        label: 'Album Image'
      }
    }
  }

}));
