/**
 * Options in a console page section
 * @constructor
 */
export const ConsoleSectionOption = function(site, option) {
	for(let member in option) {
		this[member] = option[member];
	}

	this.available = function(user) {
		let atLeast = this.atLeast;
		if(atLeast === Object(atLeast)) {
			atLeast = site.permissions.atLeast(atLeast.tag, atLeast.default);
		}

		return (atLeast === undefined || user.atLeast(atLeast));
	}
}
