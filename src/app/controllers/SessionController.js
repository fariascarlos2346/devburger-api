class SessionController {
    async store(request, response) {
        return response.json({ message: 'session' });
    }
}

export default new SessionController();