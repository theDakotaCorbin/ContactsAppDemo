app = app || {};

app.models.Person = Backbone.Model.extend({
    defaults: {
         "firstname": "",
        "lastname": "",
        "status": "",
        "street": "",
        "city": "",
        "state": "",
        "zip": "",
        "phone": ""
    },
    
    initialize: function() {
        var self = this;
        if(this.get('status') === 'Current Investigator') {
            self.set('type', 'Current Investigator');
        }
        if(this.get('status') === 'Active Member') {
            self.set('type', 'Active Member');
        }
        if(this.get('status') === 'Inactive Member') {
            self.set('type', 'Inactive Member');
        }
        if(this.get('status') === 'Inactive Investigator') {
            self.set('type', 'Inactive Investigator');
        }
        if(this.get('status') === 'Referral') {
            self.set('type', 'Referral');
        }
    }
    
});


app.collections.People = Backbone.Collection.extend({
	
	model: app.models.Person,
	
	comparator: function(person) {
		return person.get('lastname');
	}
	
});