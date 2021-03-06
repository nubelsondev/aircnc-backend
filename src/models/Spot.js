const { Schema, model } = require('mongoose')

const SpotSchema = new Schema(
	{
		thumbnail: String,
		company: String,
		price: Number,
		techs: [String],
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{
		toJSON: {
			virtuals: true
		}
	}
)

SpotSchema.virtual('thumbnail_url').get(function() {
	return `http://localhost:3333/files/${this.thumbnail}`
})
SpotSchema.virtual('thumbnail_url_mobile').get(function() {
	return `http://192.168.1.9:3333/files/${this.thumbnail}`
})

const Spot = model('Spot', SpotSchema)

module.exports = Spot
