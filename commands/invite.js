//Invite Command
module.exports.run = (client, prefix, message, args, pool, dbl) => {
	client.generateInvite(['SEND_MESSAGES', 'MANAGE_MESSAGES'])
		.then(link => {
			message.author.send(`If you'd like to add CommandCleanup to your server please use the link below...\n${link}`).catch(err => console.log(err.stack))
			console.log(`Invite link ${link} created and sent to ${message.author.username}`)
		}).catch(err => console.log(err.stack))

	if (message.channel.type != 'dm') {
		message.delete(0).catch(err => console.log(err.stack))
	}
}
