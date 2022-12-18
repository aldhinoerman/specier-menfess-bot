const Twit = require("twit");

class SpecierBot {
  constructor(props) {
    this.T = new Twit({
      consumer_key: props.consumer_key,
      consumer_secret: props.consumer_secret,
      access_token: props.access_token,
      access_token_secret: props.access_token_secret,
    });
  }

  getUserAdminInfo = () => {
    return new Promise((resolve, reject) => {
      this.T.get("account/verify_credentials", { skip_status: true })
        .then((result) => {
          const userId = result.data.id_str;
          resolve(userId);
        })
        .catch((err) => {
          console.log(err);

          reject(err);
        });
    });
  };
}

module.exports = { SpecierBot };
