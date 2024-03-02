module.exports = {
    databaseConnection: require('./connection'),
    OrderRepository: require('./repository/order-repository'),
    CartRepository: require('./repository/cart-repository'),
    WishlistRepository: require('./repository/wishlist-repository')
}