const database = require("./database");

exports.getItemsByType = function (type) {
	return database.execute("select * from name_gator.item where type = $1", [type]);
};

exports.getItems = function () {
	return database.execute("select * from name_gator.item");
};

exports.saveItem = function (item) {
	return database.execute("insert into name_gator.item (type, description) values ($1, $2) returning *", [item.type, item.description]);
};

exports.deleteItem = function (id) {
	return database.execute("delete from name_gator.item where id = $1", [id]);
};