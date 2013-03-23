$(function(){
	$('button[type="submit"]').click(function(){
		var form = $(this).parent(),
			formResult = [],
			res = $('<pre/>',{
				'class':'prettyprint'
			})

		$.each($('.md-editor'),function(k,v){
			$(v).data('blur')()
		})

		$.each(form.serializeArray(),function(k,v){
			formResult.push(v.name+' => '+v.value)
		})

		res.html('\n'+formResult.join('\n\n')+'\n')
		form.replaceWith(res)

		return false
	})

	$('#target-editor-with-custom-buttons').markdown({
		additionalButtons: [
			[{
		        name: 'groupCustom',
		        data: [{
		          name: 'cmdBeer',
		          title: 'Beer',
		          icon: 'icon icon-glass',
		          callback: function(e){
		            // Replace selection with some drinks
		            var chunk, cursor, selected = e.getSelection(), content = e.getContent(),
		            	drinks = ['Heinekken', 'Budweiser', 'Iron City', 'Amstel Light', 'Red Stripe', 'Smithwicks', 'Westvleteren', 'Sierra Nevada', 'Guinness', 'Corona', 'Calsberg'],
		            	index = Math.floor((Math.random()*10)+1)


	              	// Give random drink
	              	chunk = drinks[index]

		            // transform selection and set the cursor into chunked text
	              	e.replaceSelection(chunk)
		            cursor = selected.start

		            // Set the cursor
		            e.setSelection(cursor,cursor+chunk.length)
		          }
		        }]
			}]
		]
	})

	$('#editor-triger-init').click(function(){
		$('#target-editor').markdown({
			savable:true,
			onShow: function(e){
				alert('Showing '
					+e.$textarea.prop('tagName').toLowerCase()
					+'#'
					+e.$textarea.attr('id')
					+' as Markdown Editor...')
			},
			onSave: function(e) {
				alert('Saving "'+e.getContent()+'"...')
			},
			onBlur: function(e) {
				alert('Blur triggered!')
			}
		})

		$(this).hide()
		return false
	})

	console.log(marked('<p>Foo is bar</p>'));
})