$(function() {




///------------------------------------------------------------------------------------------------------------------------------------------------
    class CreateTab {

        constructor(el, settings) {
            this.el = el;
            this.$el = $(el);
            this.$form = this.$el.next();
            this.$input = this.$form.find('.form-input');
            this.$add = this.$form.find('.create-tab__add');
            this.$close = this.$form.find('.create-tab__close');
            this.$form.on('shown.bs.collapse', () => this.$input.focus());
            this.$el.on('click', () => this.$form.collapse('toggle'));
            this.$close.on('click', (event) => {
                event.preventDefault()
                this.$form.collapse('hide');
            });
            this.$add.on('click', () => {
                let tabName = this.$input.val();
                this.add(tabName);

                return false;
            });
        }

        add(tabName) {
            let counter = 0;
            let id = Math.random().toString(36).substr(2, 5);
            let navTabTemplate = '<a href="#'+ id +'" data-toggle="tab" class="nav-link bt-editar">'+ tabName +'</a>';
            let tabPaneTemplate = '<div class="tab-pane" id="'+ id +'" role="tabpanel"> New content of '+ tabName +' </div>';

            if(tabName == '' || tabName == null) {
                console.log('Not working');
                return false;
            } else {
                $('<li class="nav-item tab-'+ id +'">'+navTabTemplate+'</li>').insertAfter(this.$el.parents('.nav.nav-tabs').find('.nav-item').last().prev());
                $('.tab-content').append(tabPaneTemplate);
                $('.tab-' + this.id).find('.opcoes-arquivo .bt').on('click', function(){
                    $(this).closest('.dropdown').toggleClass('dropdown--active');
                });
                this.$input.val('');
                this.$form.collapse('hide');
                $('.tab-'+ id +' .nav-link').html(tabName);
            }


        }
    }

// Autoinstantialization of component
    $('.create-tab .nav-link').each( function () {
        $(this).data('create-tab', new CreateTab( this, {
        }));
    })

});