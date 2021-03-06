// addText, v0.0.1

(function($){
  var loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas posuere laoreet. Nullam id neque sit amet mauris venenatis blandit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum elementum fringilla diam, non ullamcorper nunc euismod quis. Aliquam iaculis congue sodales. Aliquam id est tristique leo semper tincidunt et non urna. Fusce vel ligula mauris. Nam ut dui diam. Nam dictum ipsum a purus dapibus ac posuere arcu tempus. Ut fermentum sollicitudin sem a consectetur. Curabitur fringilla ante ut turpis dignissim dignissim ultrices nulla ultricies. Duis semper purus quis lorem varius congue. Nulla pretium placerat magna non fringilla. Nulla sollicitudin risus id metus commodo tincidunt. Nunc aliquam, leo vehicula vehicula gravida, libero massa auctor nunc, sit amet tincidunt ante tortor vitae nunc. Maecenas ac nunc ac purus vestibulum pharetra at non elit. Praesent pellentesque mattis consequat. Quisque lacus ligula, mattis ac egestas eget, semper vitae dolor. Phasellus at dolor odio, vitae condimentum nisl. Sed vitae suscipit sem. Phasellus ultrices lectus non nibh posuere non condimentum ligula pellentesque. Mauris in nunc eu turpis pretium suscipit. Cras lobortis auctor rutrum. Vivamus ipsum nulla, sollicitudin ac iaculis sit amet, consectetur vitae elit. Quisque mauris neque, hendrerit ac euismod elementum, viverra sed ligula. Praesent nec elit at elit volutpat facilisis a et leo. Fusce dolor turpis, pellentesque at condimentum sit amet, molestie ac dui. Sed justo metus, semper ut molestie in, euismod id eros. Nullam sit amet diam ante. Phasellus egestas sapien vel elit condimentum eget auctor ante egestas. Aliquam dictum aliquam velit eu rutrum. In rutrum gravida purus, et convallis justo tincidunt vel. Etiam sollicitudin, justo id varius ultricies, urna tellus malesuada augue, ac sagittis odio elit eget enim. Duis non neque ipsum. Aenean vestibulum pretium nibh sed consectetur. Mauris rutrum, diam et lobortis molestie, nisi augue varius felis, vitae tempus orci massa congue ipsum. Pellentesque ornare adipiscing sapien, a porttitor orci pretium ut. Sed gravida auctor tellus eget fermentum. Aenean nisl sapien, facilisis vitae pharetra sit amet, mollis rutrum metus. Aliquam erat volutpat. Fusce pretium cursus magna, at molestie dui dignissim pellentesque. Suspendisse vel ligula justo. Vestibulum interdum metus id enim scelerisque in volutpat nunc hendrerit. Etiam sit amet turpis vitae est interdum pretium at dictum erat. Quisque varius, purus a pulvinar porta, odio lectus sagittis sem, vitae aliquam nisl justo sed sapien. Donec id ligula eget nisi scelerisque auctor vel eget ante. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum lacinia convallis gravida. Nunc nisi velit, ornare non posuere eu, fringilla aliquam tortor. Maecenas sollicitudin molestie eros, ac interdum velit malesuada et. Nam semper viverra eros at pellentesque. Sed vel velit et tellus vestibulum dictum non eget lectus. Nunc lectus odio, auctor sed egestas ut, mattis quis purus. Nulla vel enim eu ante faucibus molestie. Pellentesque nibh tellus, mollis et posuere quis, interdum eu dui.'

  var methods = {
    init: function(options){
      var options = $.extend({}, $.fn.addText.defaults, options); 
      
      return this.each(function(){
        var textLength = $(this).text().length;
        var addedText = ' '+loremipsum.slice(0, textLength * options.percent * 0.01);
        $(this).append(addedText);
      })
    }
  };

  $.fn.addText = function( method ) {
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }
  };
  
  $.fn.addText.defaults = {
    percent: 20
  }

})(window.Zepto || window.jQuery)