package com.blahblah.web.service;

import com.blahblah.web.dto.request.ArticleDTO;
import com.blahblah.web.dto.response.SubscribeArticleDTO;
import com.blahblah.web.entity.ArticleEntity;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ArticleService {

    ArticleEntity createArticle(ArticleDTO articleDTO);

    boolean updateArticle(ArticleDTO articleDTO);

    void deleteArticle(long id);

    List<SubscribeArticleDTO> readArticle(long id);

    List<SubscribeArticleDTO> readMyArticle(long id);

}
