import photo from './asset/images/photo.png';
import contentHeadPortrait from './asset/images/content_head_portrait.png';
import papillonSmallBlue from './asset/images/papillon_small_blue.png';
import papillonSmallPurple from './asset/images/papillon_small_purple.png';
import numberTwo from './asset/images/number_two.png';
import headPortrait1 from './asset/images/head_portrait1.png';
import headPortrait2 from './asset/images/head_portrait2.png';
import heart from './asset/images/heart.png';
import relatedImgOne from './asset/images/related-img-one.png';
import relatedImgThree from './asset/images/related_img_three.png';
import relatedTwo from './asset/images/related_two.png';
import relatedUser from './asset/images/related-user.png';
import Button from './components/button'
import './style/App.scss';

const targetUrl = 'https://apps.apple.com/us/app/pet/id1560912975';


const commentList = [
  {
    id: 1,
    userImage: headPortrait1,
    name: '叮咚',
    comment: '很赞的狗狗~ ',
    likes: 29,
    date: '今天 10:40',
    posts: [
      {
        id: 3,
        userImage: contentHeadPortrait,
        name: '大龄铲屎官',
        comment: '是的是的',
        likes: 2,
        date: '刚刚',
      }
    ]

  },
  {
    id: 230,
    userImage: headPortrait2,
    name: '第三个阿飞',
    comment: '我也想要一只 ',
    likes: 29,
    date: '昨天 17:35',
  }
];

const recommendedContentList = [
  {
    id: 11,
    link: '',
    title: '人家都不跟你玩，你说你追着人家干嘛...',
    imageUrl: relatedImgOne,
    userImageUrl: relatedUser,
    userName: '大龄铲屎官',
    count: 984,
    icons: [papillonSmallBlue, papillonSmallBlue, papillonSmallPurple, papillonSmallBlue, numberTwo]
  },
  {
    id: 11,
    link: '',
    title: '人家都不跟你玩，你说你追着人家干嘛...',
    imageUrl: relatedTwo,
    userImageUrl: relatedUser,
    userName: '大龄铲屎官',
    count: 984,
    icons: [papillonSmallPurple]
  },
  {
    id: 11,
    link: '',
    title: '人家都不跟你玩，你说你追着人家干嘛...',
    imageUrl: relatedImgThree,
    userImageUrl: relatedUser,
    userName: '大龄铲屎官',
    count: 984,
    icons: [papillonSmallBlue]
  },
  {
    id: 11,
    link: '',
    title: '人家都不跟你玩，你说你追着人家干嘛...',
    imageUrl: relatedTwo,
    userImageUrl: relatedUser,
    userName: '大龄铲屎官',
    count: 984,
    icons: [papillonSmallPurple]
  }
];

function App() {
  const handleClick = () => {
    window.open(targetUrl)
  };

  const renderHeader = () => (
    <header className="header">
      <div className="d-flex-start" onClick={handleClick}>
        <img src={headPortrait1} width="32px" height="32px" alt="headPortrait1" />
        <div className="header-content">
          <p className="header-content-title">Pet App</p>
          <p className="header-content-desc">标记我的宠物生活</p>
        </div>
      </div>
      <Button outline className="header-button" onClick={handleClick}>打开App</Button>
    </header>
  )

  const renderContent = () => (
    <div className="content">
      <div><img src={photo} width="100%" alt="photo3" /></div>
      <div className="d-flex-center">
        <Button outline large className="content-button" onClick={handleClick}>打开App看更多精彩评论</Button>
      </div>

      <div className="content-main">
        <div className="d-flex-start">
          <img src={contentHeadPortrait} width="32px" height="32px" alt={'contentHeadPortrait'} />
          <div className="content-user">
            <div className="content-user-name">大龄铲屎官</div>
            <div className="content-user-img">
              <img src={papillonSmallBlue} width="20px" height="20px" alt="papillonSmallBlue" />
              <img src={papillonSmallPurple} width="20px" height="20px" alt="papillonSmallPurple" />
              <img src={papillonSmallPurple} width="20px" height="20px" alt="papillonSmallPurple" />
            </div>
          </div>
        </div>
        <div className="content-article">
          <h1 className="content-article-title">怎么今天看起来特别的有精神？？？</h1>
          <p className="content-article-body">今天带他去摄影馆拍照，比平时吃饭还要有精神，而且竟然各种摆pose，都是哪里学来的？！</p>
        </div>
        <div className="content-article-label">
          <span>04-03 10:25</span>
          <span>#狗勾</span>
          <span>#拍照</span>
        </div>
      </div>
      
    </div>
  )

  const renderComment = () => {
    const renderCommentItem = ({name, userImage, comment, likes, date, posts, isReply}) => (
      <li className={isReply ? 'comment-reply-wrapper' : 'comment-item-wrapper'} key={name}>
        <div className="comment-item">
          <div className="comment-main">
            <img src={userImage} width="32px" height="32px" alt="headPortrait" />
            <div className="comment-body">
              <div className="name">
                {name}
                {isReply && <span className="author">作者</span>}
              </div>
              <div className="comment-content">{comment}<span className="comment-item-date">{date}</span></div>
            </div>
          </div>
          <div className="comment-count">
            <img src={heart} width="24px" height="24px" alt="give a thumb up" />
            <span className="comment-item-count">{likes}</span>
          </div>
        </div>
        {posts && (<ul>{posts.map(item => renderCommentItem({...item, isReply: true}))}</ul>)}
      </li>
    )

    return(
      <section className="comment">
        <span className="comment-title d-flex-center">评论（1325）</span>
        <ul className="comment-list">
          {commentList.map(item => renderCommentItem(item)) }
        </ul>
  
        <div className="d-flex-center"><Button large onClick={handleClick}>打开App看更多精彩评论</Button></div>
      </section>
    )
  }
  

  const renderRecommendedContent = () => (
    <section className="recommended-content">
      <p className="title">相关推荐</p>
      <ul className="recommended-content-list">
        {recommendedContentList.map(({title, imageUrl, userImageUrl, userName, count, icons}, index) => (
          <li className="recommended-content-item" onClick={handleClick} key={`${userName}-${index}`}>
            <div><img src={imageUrl} width="100%" alt="relatedTwo" /></div>
            <h2 className="recommended-content-item-title">{title}</h2>
            <div className="recommended-content-item-user">
              <div>
                <img src={userImageUrl} width="20px" height="20px" alt="relatedUser" />
                <span className="name">{userName}</span>
              </div>
              
              <div className="recommended-content-item-count">
                <span className="count">{count}</span>
                <img src={heart} width="24px" height="24px" alt="heart" />
              </div>
            </div>
            <div className="recommended-content-item-icons">
              {icons && icons.map((item, index) => (
                <img src={item} width="20px" height="20px" alt="papillonSmallPurple" key={`${item}-${index}`} />
              ))}
            </div>
          </li>
        ))}
        
      </ul>
      <div className="d-flex-center">
        <Button className="recommended-content-button" onClick={handleClick}>
         <img src={headPortrait2} alt="button icon" />
         <span className="recommended-content-button-text" >App内打开</span>
        </Button>
      </div>

    </section>
  )

  return (
    <div className="App">
      { renderHeader() }
      { renderContent() }
      { renderComment() }
      { renderRecommendedContent() }
    </div>
  );
}

export default App;
