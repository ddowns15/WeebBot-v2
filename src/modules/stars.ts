import { IModuleParams } from "../types";

export default ({ client, config, db, logger }: IModuleParams) => {
	let stars = ['<:3star:384800945034493953>', '<:3star:384800945034493953>', '<:3star:384800945034493953>', '<:6star:384796061463740436>', '<:6star:384796061463740436>', '<:6star:384796061463740436>', '<:9star:384796089888276480>', '<:9star:384796089888276480>', '<:9star:384796089888276480>', '<:12star:384792468534591489>', '<:12star:384792468534591489>', '<:12star:384792468534591489>', '<:13star:384817185471856668>', '<:13star:384817185471856668>', '<:13star:384817185471856668>']
	// There's deffinitely a more efficient way of doing this since they're by threes, but it'd require more thought for the math.
	let regex = new RegExp('([1-9]|1[0-5]+) star(?: |$)','i');
	client.on("message", (message) => {
	if (message.author.bot) return;
	if (message.content.indexOf(" star") > -1) {
	let match = message.content.match(regex);
	let starcount = '';
	if (match) {
	try {
		match = match[0].replace(" star", "");
		match = parseInt(match);
		if (match > 0 && match < 16) {
		for (let i = 0; i < match; i++)
		starcount = starcount + stars[i];
		}
        return message.reply(starcount);
	} catch (err) {
        logger.warn(err.message);
	}
	}
	}
  });
}
