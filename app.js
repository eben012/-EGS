// DOM 요소
const postsContainer = document.getElementById('postsContainer');
const profileModal = document.getElementById('profileModal');
const commentsModal = document.getElementById('commentsModal');
const imageModal = document.getElementById('imageModal');

// 포스트 렌더링
function renderPosts() {
    postsContainer.innerHTML = posts.map(post => `
        <div class="post" data-post-id="${post.id}">
            <!-- 포스트 헤더 -->
            <div class="post-header">
                <div class="post-author" onclick="openProfile('${post.author.handle}')">
                    <div class="author-avatar">${post.author.avatar}</div>
                    <div class="author-info">
                        <div class="author-name">
                            ${post.author.name}
                            ${post.author.verified ? '<span class="verified-badge">✔</span>' : ''}
                        </div>
                        <div class="author-handle">${post.author.handle}</div>
                    </div>
                </div>
                <button class="post-menu">⋯</button>
            </div>

            <!-- 포스트 이미지 -->
            <img class="post-image" src="${post.image}" alt="Post image" 
                 onclick="openImageModal('${post.image}')">

            <!-- 액션 버튼 -->
            <div class="post-actions">
                <div class="action-icons">
                    <button class="action-btn like-btn" data-post-id="${post.id}" onclick="toggleLike(${post.id})">
                        ${post.liked ? '❤️' : '🤍'}
                    </button>
                    <button class="action-btn" onclick="openComments(${post.id})">💬</button>
                    <button class="action-btn">📤</button>
                </div>
                <button class="action-btn save-btn" data-post-id="${post.id}" onclick="toggleSave(${post.id})">
                    ${post.saved ? '🔖' : '🔕'}
                </button>
            </div>

            <!-- 좋아요 수 -->
            <div class="likes-count" onclick="showLikes(${post.id})">
                좋아요 <strong>${post.likes.toLocaleString()}</strong>개
            </div>

            <!-- 캡션 -->
            <div class="post-caption">
                <span class="caption-author" onclick="openProfile('${post.author.handle}')">${post.author.name}</span>
                <span class="caption-text">${post.caption}</span>
            </div>

            <!-- 댓글 미리보기 -->
            <div class="post-comments">
                ${post.comments.length > 0 ? `
                    <button class="view-comments-btn" onclick="openComments(${post.id})">
                        댓글 ${post.comments.length}개 모두 보기
                    </button>
                    ${post.comments.slice(0, 2).map(comment => `
                        <div class="comments-preview">
                            <div class="comment-item">
                                <span class="comment-author" onclick="openProfile('${comment.author.handle}')">${comment.author.name}</span>
                                <span class="comment-text">${comment.text.substring(0, 50)}${comment.text.length > 50 ? '...' : ''}</span>
                            </div>
                        </div>
                    `).join('')}
                ` : ''}
            </div>

            <!-- 날짜 -->
            <div class="post-date">${post.timestamp}</div>
        </div>
    `).join('');
}

// 좋아요 토글
function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    const btn = document.querySelector(`[data-post-id="${postId}"].like-btn`);
    
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    
    btn.textContent = post.liked ? '❤️' : '🤍';
    btn.classList.add('heart-animate');
    
    setTimeout(() => btn.classList.remove('heart-animate'), 400);
    
    // 좋아요 수 업데이트
    const postEl = document.querySelector(`[data-post-id="${postId}"]`);
    postEl.querySelector('.likes-count').innerHTML = 
        `좋아요 <strong>${post.likes.toLocaleString()}</strong>개`;
}

// 저장 토글
function toggleSave(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    const btn = document.querySelector(`[data-post-id="${postId}"].save-btn`);
    post.saved = !post.saved;
    btn.textContent = post.saved ? '🔖' : '🔕';
}

// 프로필 모달 열기
function openProfile(handle) {
    const key = handle.replace('@', '');
    const philosopher = Object.values(philosophers).find(p => p.handle === handle);
    
    if (!philosopher) return;

    const modal = document.getElementById('profileModal');
    document.getElementById('profileAvatar').textContent = philosopher.avatar;
    document.getElementById('profileName').textContent = philosopher.name;
    document.getElementById('profileHandle').textContent = philosopher.handle;
    document.getElementById('profileDescription').textContent = philosopher.bio;
    document.getElementById('profilePosts').textContent = philosopher.posts;
    document.getElementById('profileFollowers').textContent = philosopher.followers;
    document.getElementById('profileFollowing').textContent = philosopher.following;

    modal.classList.add('active');
}

// 프로필 모달 닫기
function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('active');
}

// 댓글 모달 열기
function openComments(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = post.comments.map(comment => `
        <div class="comment-full">
            <div class="comment-header">
                <div class="comment-avatar" onclick="openProfile('${comment.author.handle}')">${comment.author.avatar}</div>
                <div class="comment-content">
                    <div>
                        <span class="comment-author-name" onclick="openProfile('${comment.author.handle}')">${comment.author.name}</span>
                        <span class="comment-author-handle">${comment.author.handle}</span>
                    </div>
                    <div class="comment-body">${comment.text}</div>
                    <div class="comment-actions">
                        <span class="comment-action">${comment.timestamp}</span>
                        <span class="comment-action like-icon" onclick="likeComment(this)">🤍</span>
                        <span class="comment-likes">${comment.likes}</span>
                        <span class="comment-action">답글</span>
                    </div>
                </div>
            </div>
            
            ${comment.replies.length > 0 ? `
                <div class="reply-section">
                    ${comment.replies.map(reply => `
                        <div class="reply">
                            <div>
                                <span class="reply-arrow">↳</span>
                                <span class="reply-author" onclick="openProfile('${reply.author.handle}')">${reply.author.name}</span>
                            </div>
                            <div class="reply-text">${reply.text}</div>
                            <div class="reply-actions">
                                <span class="reply-action like-icon" onclick="likeReply(this)">🤍</span>
                                <span class="reply-likes">${reply.likes}</span>
                                <span class="reply-action">답글</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');

    document.getElementById('commentsModal').classList.add('active');
}

// 댓글 좋아요
function likeComment(element) {
    const icon = element;
    const likesSpan = element.nextElementSibling;
    const currentLikes = parseInt(likesSpan.textContent);
    
    if (icon.textContent === '🤍') {
        icon.textContent = '❤️';
        likesSpan.textContent = currentLikes + 1;
    } else {
        icon.textContent = '🤍';
        likesSpan.textContent = currentLikes - 1;
    }
}

// 답글 좋아요
function likeReply(element) {
    const icon = element;
    const likesSpan = element.nextElementSibling;
    const currentLikes = parseInt(likesSpan.textContent);
    
    if (icon.textContent === '🤍') {
        icon.textContent = '❤️';
        likesSpan.textContent = currentLikes + 1;
    } else {
        icon.textContent = '🤍';
        likesSpan.textContent = currentLikes - 1;
    }
}

// 댓글 모달 닫기
function closeCommentsModal() {
    document.getElementById('commentsModal').classList.remove('active');
}

// 이미지 모달 열기
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('imageModalContent');
    img.src = imageSrc;
    modal.classList.add('active');
}

// 이미지 모달 닫기
function closeImageModal(event) {
    if (event.target.id === 'imageModal') {
        document.getElementById('imageModal').classList.remove('active');
    }
}

// 좋아요 수 보기
function showLikes(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        alert(`좋아요 ${post.likes.toLocaleString()}개`);
    }
}

// 초기 렌더링
renderPosts();

// 모달 외부 클릭으로 닫기
document.addEventListener('click', function(event) {
    const profileModal = document.getElementById('profileModal');
    const commentsModal = document.getElementById('commentsModal');
    
    if (event.target === profileModal) {
        closeProfileModal();
    }
    if (event.target === commentsModal) {
        closeCommentsModal();
    }
});

// 키보드 ESC로 모달 닫기
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProfileModal();
        closeCommentsModal();
        closeImageModal(event);
    }
});
