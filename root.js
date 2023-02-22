let game = {
    requests: {
        get: (url, callback) => {
            if (!callback) callback = (data) => {}
            $.ajax({
                type: "GET",
                url: url,
                contentType: "application/json",
                success: (data) => callback(data),
                error: (data) => callback(data)
            });
        },
        post: (url, data, callback) => {
            if (!callback) callback = (data) => {}
            $.ajax({
                type: "POST",
                url: url,
                data: JSON.stringify(data),
                contentType: "application/json",
                success: (data) => callback(data),
                error: (data) => callback(data)
            });
        }
    }
};
