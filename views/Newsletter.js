import React from "react";
import PropTypes from "prop-types";
import jsonp from "jsonp";
import toQueryString from "to-querystring";
import NewsletterForm from "./NewsletterForm";

const getAjaxUrl = url => url.replace("/post?", "/post-json?");

class MailchimpSubscribe extends React.Component {
    state = {
        status: null,
        message: null
    };
    subscribe = data => {
        const params = toQueryString(data);
        const url = getAjaxUrl(this.props.url) + "&" + params;
        // const url = 'https://roughnecks.us20.list-manage.com/subscribe/post?u=83d4d3fec0062aa30fd7d638f&amp;id=d0bceae844';
        this.setState(
            {
                status: "sending",
                message: null
            },
            () =>
                jsonp(
                    url,
                    {
                        param: "c"
                    },
                    (err, data) => {
                        if (err) {
                            this.setState({
                                status: "error",
                                message: err
                            });
                        } else if (data.result !== "success") {
                            this.setState({
                                status: "error",
                                message: data.msg
                            });
                        } else {
                            this.setState({
                                status: "success",
                                message: data.msg
                            });
                        }
                    }
                )
        );
    };
    render() {
        return this.props.render({
            subscribe: this.subscribe,
            status: this.state.status,
            message: this.state.message
        });
    }
}

MailchimpSubscribe.propTypes = {
    render: PropTypes.func,
    url: PropTypes.string.isRequired
};

MailchimpSubscribe.defaultProps = {
    render: ({ subscribe, status, message }) => (
        <NewsletterForm
            status={status}
            message={message}
            onSubmitted={formData => subscribe(formData)}
        />
    )
};

export default MailchimpSubscribe;