let data = {
	username: "mikestreety", // No leading @ here
	homeLabel: "mikestreety.co.uk",
	homeUrl: "https://www.mikestreety.co.uk/"
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;
